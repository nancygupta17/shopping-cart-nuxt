export const state = () => ({
    cartProducts: [],
    totalPrice: 0
})

export const getters = {
    cartProducts: function (state) { 
        return state.cartProducts 
    },
    totalPrice: function (state) { 
        return Math.abs(state.totalPrice )
    },
}

export const actions = {
    load ({ commit }) {
        commit('updateCart') 
    },

    addProduct ({ commit }, product) {
        return new Promise(resolve => {
            commit('addToCart', product)
            resolve() 
        })
    },
    removeProduct ({ commit }, product) {
        return new Promise(resolve => {
            commit('removeFromCart', product)
            resolve() 
        })
    }
}

export const mutations = {
    updateCart(state) {
        state.cartProducts = []
        console.log("state.cartProducts => ", state.cartProducts);
    },

    addToCart (state, product) {
        state.cartProducts.push(product.productId)
        state.totalPrice = state.totalPrice + product.productPrice
    },

    removeFromCart (state, product) {
        const index = state.cartProducts.indexOf(product.productId);
        if (index > -1) {
            state.cartProducts.splice(index, 1); // 2nd parameter means remove one item only
        }
        state.totalPrice = state.totalPrice - product.productPrice
    },
}