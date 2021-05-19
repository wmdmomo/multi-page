const req = require.context('./', false, /[^.]+\.vue/);
console.log(req.keys())
const components = req.keys().reduce((components, module) => {
    const mod = req(module);
    // console.log('###',mod.default.name)
    components[mod.default.name] = mod;
    return components;
}, {});

export default components;
