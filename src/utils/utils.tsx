export const formettedErrorText = (message:string | null) => {
    if(message){
        return message.replace(/firebase/gi, '').trim()
    }return message
    
}
export function isEmaiValid(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }