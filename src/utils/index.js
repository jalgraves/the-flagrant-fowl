import * as configObj from "./config.js"

const getOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}
const config = configObj.default

export { config, getOptions }
