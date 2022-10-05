function filterData(e) {
    const element = data[0].filter((el) =>
      el.nama_lengkap.toLowerCase().includes(e.value.toLowerCase())
    );
    let wrapper = document.getElementById("wrapper-element");
  
    if(e.value === '' || element.length === 0){
      wrapper.innerHTML = 'There is nothing in here'
    }else{
      renderData(element);
    }
  }