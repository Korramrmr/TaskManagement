import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';

Vue.component('svg-icon', SvgIcon);

const req = require.context('../assets/icons/svg', false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
