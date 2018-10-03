const xml = new XMLHttpRequest();
xml.open('GET', 'js/data.json', true);
xml.onload = function(){
  if(this.status === 200){
    const Data = JSON.parse(this.responseText);
    let output = '';

    Data.forEach(function(jsonData){
  
      output += ` 
                  <div class="col-12 main-grid">
                    <div class="content">
                      <h3 class="mx-4 my-3 heading-text">${jsonData.algoHeading}</h3>
                      <p class="algo-description mx-4">${jsonData.description}</p>
                      

                      <!-- Likes And Comment Section -->
                      <div class="likes_comment clearfix">
                        <div id="comments" class="mr-2 ">
                          <div class="viewsDiv">
                           <i class="fa fa-eye views" aria-hidden="true" title="views"></i>
                           <span class="viewsData">${jsonData.views}</span>
                          </div>
                          
                          <div class="commentsDiv">
                            <i class="fa fa-comments comments" aria-hidden="true" title="comments"></i> 
                           <span class="commentsData">${jsonData.comments}</span>
                          </div>
                          
                          <div class="likesDiv">
                            <i class="fa fa-thumbs-up likes" title="likes" aria-hidden="true"></i>
                           <span class="likesData">${jsonData.likes}</span>
                          </div>
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


