const req = require.context('./', false, /[^.]+\.vue/);

const components = req.keys().reduce((components, module) => {
    const mod = req(module).default;
    components[mod.name] = mod;
    return components;
}, {});

export default components;
