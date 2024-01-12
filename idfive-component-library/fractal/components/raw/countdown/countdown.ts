export class Countdown {
    private element: HTMLElement;
    private countdownDays: HTMLElement;
    private countdownHours: HTMLElement;
    private countdownMins: HTMLElement;
    private countdownSecs: HTMLElement;
    private countdownTime: string;
    constructor(element: HTMLElement) {
      if (!!element) {
        this.element = element;
        this.countdownDays = this.element.querySelector(".countdown-days");
        this.countdownHours = this.element.querySelector(".countdown-hours");
        this.countdownMins = this.element.querySelector(".countdown-mins");
        this.countdownSecs = this.element.querySelector(".countdown-secs");
        this.countdownTime = this.element.getAttribute("data-enddate");
        this.init();
      }
    }
  
    private init() {
        // Set the date we're counting down to
        const dateObject: Date = new Date(this.countdownTime);
        let countDownDate = new Date(this.countdownTime).getTime();

        // Update the count down every 1 second
        
        const x = setInterval(() => {

            // Get today's date and time
            let now = new Date().getTime();
                
            // Find the distance between now and the count down date
            let distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            this.countdownDays.innerHTML = days.toString();
            this.countdownHours.innerHTML = hours.toString();
            this.countdownMins.innerHTML = minutes.toString();
            this.countdownSecs.innerHTML = seconds.toString();
            // If number of days is above 100 add class="above100" to .countdown-sequence_days 
            if(days.toString().length > 2){
              if(!this.element.querySelector(".countdown-sequence_days").classList.contains("above100")){
                this.element.querySelector(".countdown-sequence_days").classList.add("above100");
              }
            } else {
              if(this.element.querySelector(".countdown-sequence_days").classList.contains("above100")){
                this.element.querySelector(".countdown-sequence_days").classList.remove("above100");
              }
            }
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.querySelector(".countdown-sequence").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
}
  
export default function countdownInit() {
    const countdowns = document.querySelectorAll(".countdown") as NodeListOf<HTMLElement>;
    for (let i = 0; i < countdowns.length; i++) {
      new Countdown(countdowns[i]);
    }
}