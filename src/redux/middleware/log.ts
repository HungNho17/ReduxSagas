
export const logger = (store: any) => (next: (arg0: any) => void) => (action: any) => {
 console.log ('[logger]', action);
 next(action);
}