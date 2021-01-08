import { shallow } from "enzyme";
import { HomePage } from "../../../components/09-useContext/HomePage";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <HomeScreen />', () => {
    
    const user = {
        name: 'Maggie',
        email: 'muerdomucho@gmail.com'
    }

    const wrapper = shallow( 
        <UserContext.Provider value={ {
            // Voy a compartir ese user en este contexto
            user 
        }}>
            <HomePage /> 
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

});