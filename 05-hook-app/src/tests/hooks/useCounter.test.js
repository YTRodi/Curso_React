import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Test en el hook useCounter', () => {
    
    test('Debe de retornar un objeto con los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe( 10 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );

    });

    test('Debe de incrementar el counter a 101', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) );
        const { increment } = result.current;
        
        // Cuando queremos hacer pruebas en hooks y hacer alguna acción dentro de ese hook usamos 'act'
        act( () => {
            increment();
        });
        
        const { counter } = result.current;

        expect( counter ).toBe( 101 );

    });

    test('Debe de decrementar el counter a 99', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) );
        const { decrement } = result.current;
        
        // Cuando queremos hacer pruebas en hooks y hacer alguna acción dentro de ese hook usamos 'act'
        act( () => {
            decrement();
        });
        
        const { counter } = result.current;

        expect( counter ).toBe( 99 );
        
    });

    test('Debe de resetear el counter a 100', () => {
        
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter ,increment, reset } = result.current;
        
        // Cuando queremos hacer pruebas en hooks y hacer alguna acción dentro de ese hook usamos 'act'
        act( () => {
            increment();
            reset();
        });

        expect( counter ).toBe( counter );
        
    });

});