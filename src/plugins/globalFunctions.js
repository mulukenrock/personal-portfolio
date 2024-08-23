import { fetchDate } from "@/utils/dateUtils";

export default {
  install(Vue) {
    Vue.prototype.$fetchDate = fetchDate;
  },
};
