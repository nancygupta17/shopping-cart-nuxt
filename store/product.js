
export const state = () => ({
    cartProducts: []
})

export const getters = {
    cartProducts: function (state) { 
        return state.cartProducts 
    },
 }

export const actions = {
    load ({ commit }) {
        return new Promise(resolve => {
            setTimeout(() => {
              commit('update', { _id: 1, title: 'Product', price: 99.99 })
              resolve()
            }, 1000)
        })
    },
    addProduct ({ commit }, productId) {
        return new Promise(resolve => {
            commit('addToCart', productId)
            resolve() 
        })
    },
    removeProduct ({ commit }, productId) {
        return new Promise(resolve => {
            commit('removeFromCart', productId)
            resolve() 
        })
    }
}

export const mutations = {
    addToCart (state, product) {
        state.cartProducts.push(product)
    },

    removeFromCart (state, product) {
        const index = state.cartProducts.indexOf(product);
        console.log("index => ", index)
        if (index > -1) {
            state.cartProducts.splice(index, 1); // 2nd parameter means remove one item only
        }
    },
    
    update (state, product) {
        Object.assign(state, product)
    }
}