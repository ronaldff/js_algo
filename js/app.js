const xml = new XMLHttpRequest();
xml.open('GET', 'js/data.json', true);
xml.onload = function(){
  if(this.status === 200){
    const Data = JSON.parse(this.responseText);
    let output = '';

    Data.forEach(function(jsonData){
      output += `
                  <div class="col-xs-6 col-sm-4 col-md-4 main-grid">
                    <div class="content">
                      <h3 class="mt-2 heading-text text-center">${jsonData.title}</h3>
                      <div class="border_top"></div>

                      <!-- Likes And Comment Section -->
                      <div class="likes_comment clearfix">
                        <div id="likes" class="ml-2 mb-2">
                          <i class="fa fa-thumbs-up" title="likes" aria-hidden="true"></i>
                        </div>
                        <div id="comments" class="mr-2 ">
                          <i class="fa fa-comments" aria-hidden="true" title="comments"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                `
      
    });
    document.querySelector('.filtering').innerHTML = output;
  }
    
}
xml.send();

