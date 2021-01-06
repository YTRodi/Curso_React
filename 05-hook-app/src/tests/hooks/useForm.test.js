import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Test en el hook useCounter', () => {
    
    const initialForm = {
        name: 'Maggie',
        email: 'Maggie@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toEqual( 'function' );
        expect( typeof reset ).toEqual( 'function' );

    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;
        
        act( () => {

            // Simulo un input cuando hace la modificación...
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Luna'
                }
            });

        });

        const [ formValues ] = result.current;
        
        // 🤯 Me aseguro de que las otras propiedades no cambiaron, sólo cambié el name.
        expect( formValues ).toEqual( { ...initialForm, name: 'Luna' } );

    });

    test('Debe de resestablecer el formulario con reset', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;
        
        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Luna'
                }
            });

            reset();
        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( initialForm );

    });

});