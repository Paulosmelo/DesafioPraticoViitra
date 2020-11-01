const axios = require('axios').default;
const elements =  {
    state: 'user_state',
    city: 'user_city',
};

document.addEventListener('click', (e)=>{
    if(e.target['id'] == elements.state){
        const stateId =  e.target.value;
        const jsonResponse = await getStates(stateId);
        const js = JSON.parse(jsonResponse);
        const states = js.map((item)=> item.nome);
        renderOptions(states);
    }
});

const getStates =  async (id)=>{
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+id+'/distritos')
    .then((response)=>{
        return Response.data;
    });
}

const renderOptions = (states) => {
    
}