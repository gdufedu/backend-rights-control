import Vue from 'vue';
import router from '@/router.js';
Vue.directive('permission', {
    inserted(el, binding) {
        const action = binding.value.action;
        const effect = binding.value.effect;  
        if (router.currentRoute.meta.indexOf(action) == -1) {
            if (effect === 'disabled') {
                el.disabled = true;
                el.classList.add('is-disabled');
            } else {
                el.parentNode.removeChild(el);
            }
        }    
    }
});