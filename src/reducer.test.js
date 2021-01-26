import reducer, {initialState} from "./reducer";

describe('reducer', () => {
    it('should set user and return new state', () => {
        const testUser = {};
        const state = {};

        const newState = reducer(state, {
            type: 'SET_USER',
            user: testUser,
        });

        expect(newState.user).toBe(testUser);

        // check new instance for the state created
        expect(newState).not.toBe(state);
    });

    it('should return same state if nothing changed', () => {
        const state = {};
        const newState = reducer(state, {
            type: 'DUMMY_ACTION'
        });

        expect(newState).toBe(state);
    });

    it('should add items to basket', () => {
        const newState = reducer(initialState, {
            type: 'ADD_TO_BASKET',
            item:            {
                id:"2",
                title:"Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black",
                price:11.98,
                rating:4,
                image:"https://m.media-amazon.com/images/I/71ekWFCunfL._AC_UY218_.jpg"
                },
        });

        const newState2 = reducer(newState, {
            type: 'ADD_TO_BASKET',
            item:             {
                id:"2",
                title:"Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black",
                price:11.98,
                rating:4,
                image:"https://m.media-amazon.com/images/I/71ekWFCunfL._AC_UY218_.jpg"
                },
        });

        expect(newState.basket.length).toBe(initialState.basket.length + 1);
        expect(newState2.basket.length).toBe(2);
    });

    it('should remove from basket', () => {
        const state = {
            ...initialState,
            basket: [
                {
                    id:"2",
                    title:"Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black",
                    price:11.98,
                    rating:4,
                    image:"https://m.media-amazon.com/images/I/71ekWFCunfL._AC_UY218_.jpg"
                    },
            ]
        };

        const newState = reducer(state, {
            type: 'REMOVE_FROM_BASKET',
            id: 2,
        });

        expect(newState.basket.length).toBe(1);
    });

});