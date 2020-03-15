import axios from 'axios'
import * as Config from '../Contant/Config'

export default function CallApi (endpoint , method  , body ) {
    return   axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body

    }).catch((err) => {
            console.log(err)
     })
}