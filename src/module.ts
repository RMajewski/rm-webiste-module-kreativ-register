import { addComponentsDir, createResolver, defineNuxtModule, extendPages } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@rene-majewski/website-module-kreativ-register',
    configKey: 'moduleKreativRegister',
    compatibility: {
      nuxt: '>=3.16.0',
    },
  },
  defaults: {},
  setup() {
    console.info('📦 @rene-majewski/website-module-kreativ-register will be loaded');

    const resolver = createResolver(import.meta.url);

    addComponentsDir({ path: resolver.resolve('components') });

    extendPages((pages) => {
      pages.push({
        name: 'kreativ-register',
        path: '/kreativ-register',
        file: resolver.resolve('runtime/pages/index.vue'),
      });
    });

    console.info(' ✓ has been loaded');
  },
});
