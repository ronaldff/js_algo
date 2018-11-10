// Json Data For Algorithms Content Box
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
                            <a href = "#" id="viewsanchor"
                              <i class="fa fa-eye views" aria-hidden="true" title="views">
                                <span class="views-counter">${jsonData.views}</span>
                              </i>
                            </a>
                          </div>
                          
                          <div class="commentsDiv">
                            <a href="#" id="commentsanchor"
                              <i class="fa fa-comments comments" aria-hidden="true" title="comments">
                                <span class="comments-counter">${jsonData.comments}</span>
                              </i> 
                            </a>
                          </div>
                          
                          <div class="likesDiv">
                            <a href = "href" id="likesanchor"
                              <i class="fa fa-thumbs-up likes" title="likes" aria-hidden="true">
                                <span class="likes-counter">${jsonData.likes}</span>
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `
      
    });
    document.querySelector('.mainContent').innerHTML = output;  
  }
    
}
xml.send();


// Filtering Data On Search Input For Particular Algo
document.querySelector('#search').addEventListener('keyup', filterAlgo);

function filterAlgo(e) {
  const text = e.target.value.toLowerCase();

  const contents = document.querySelectorAll('.content');

  contents.forEach(function(content){
    if (content.firstElementChild.textContent.toLowerCase().indexOf(text) != -1){
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  })
}




