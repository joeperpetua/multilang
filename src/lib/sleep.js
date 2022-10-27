const sleep = async (time, unit) => {
    //console.log(` --- Waiting for ${time} ${unit} --- `);
    switch(unit){
      case 'ms':
        return new Promise(resolve => setTimeout(resolve, time));
  
      case 's':
        return new Promise(resolve => setTimeout(resolve, time*1000));
  
      case 'm':
        return new Promise(resolve => setTimeout(resolve, time*60000));
        
      case 'h':
        return new Promise(resolve => setTimeout(resolve, time*3600000));
  
      default:
        throw new Error(`Sleep unit measure not recognized.\nSupported: ms, s, m, h.\nGiven: ${unit}`);
    }
}

export {sleep};