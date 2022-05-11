https://5ed74760152c310016d84d62.mockapi.io/api/




class UserService {
    sayHi() {
        console.log("hi");
    }
}


class Component {
    constructor(public user: UserService) {}
}

class Injector {
    private _container = new Map();

    constructor(private _providers: any[] = []) {
        this._providers.forEach(service => this._container.set(service, new service()))
    }

    get(service: any) {
        const serviceInstance = this._container.get(service);
        if(!serviceInstance) {
            throw Error('No provider');
        }

        return serviceInstance
    }
}


const injector = new Injector([UserService])
const component = new Component(injector.get(UserService))
component.user.sayHi()
