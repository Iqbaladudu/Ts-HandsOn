/* 

Getter: A property that allows modification or validation of a related field before returning it
Other Name: Computed properties

Setter: A property that allows modification or computation of a value before setting to a related field

*/
class Speaker {
    constructor(private name: string, private message: string) {}

    get Message() {
        if(!this.message.includes(this.name)) {
            throw Error("Message is missing speaker's name")
        }
        return this.message
    }
    set Message(val: string) {
        let tmpMessage = val
        if(!val.includes(this.name)) {
            tmpMessage = this.name + " " + val
        }
        this.message = tmpMessage
    }
}

const speaker = new Speaker("Iqbal", "Hello")
speaker.Message = "Woi"
console.log(speaker.Message)