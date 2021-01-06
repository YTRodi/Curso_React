import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Pruebas en el componente HookApp', () => {
    
    test('Debe de mostrar el componente <HookApp /> correctamente', () => {
        
        const wrapper = shallow( < HookApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

});