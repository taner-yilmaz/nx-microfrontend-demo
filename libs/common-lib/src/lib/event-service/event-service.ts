import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();


const AppEventService = {
	on: (event:any, fn: any) => eventEmitter.on(event, fn),
	once: (event:any, fn: any) => eventEmitter.once(event, fn),
	off: (event:any, fn: any) => eventEmitter.off(event, fn),
	emit: (event:any, payload:any) => eventEmitter.emit(event, payload)
}

Object.freeze(AppEventService);


export default AppEventService;