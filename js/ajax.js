$(document).ready(function () {
  //you get url from cdn
  var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
  $.ajax({
    url: url,
    success: function (data) {
      console.log(data)
      var result = "";
      data.hits.forEach(element => {
        result += `
                <div class="col-6 shadow mt-5">
                <div class ="carc-header">
                      <img src ="${element.userImageURL}" class ="img-fluid rounded-circle" width="50">
                       ${element.user}
                       <button type="button" class="btn btn-info float-right" data-toggle="modal" data-target="#myModal${element.id}">Views </button>
                  </div>
                  <div class ="carc-body">
                      <img src ="${element.largeImageURL}" class ="img-fluid " >
                  </div>
                  <div class="container">
                          <div class="modal fade" id="myModal${element.id}">
                            <div class="modal-dialog">
                              <div class="modal-content">
                              
                                <!-- Modal Header -->
                                <div class="modal-header">
                                <img src ="${element.userImageURL}" class ="img-fluid rounded-circle" width="50">
                                ${element.user}
                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                
                                <!-- Modal body -->
                                <div class="modal-body">
                                  <img src ="${element.largeImageURL}" class ="img-fluid " >
                                </div>
                                
                                <!-- Modal footer -->
                                <div class="modal-footer">
                                  <div class="container">
                                  <ul class="list-group list-group-horizontal">

                                      <li class="list-group-item">${element.likes}<i class="material-icons text-primary">thumb_up</i></li> 
                                      <li class="list-group-item">${element.favorites}<i class="material-icons  text-success">favorite</i></li>
                                      <li class="list-group-item">${element.comments}<i class="material-icons  text-danger"> comment </i></li>         
                                      <li class="list-group-item">${element.views}<i class="material-icons  text-info">supervisor_account</i></li>
                              
                                  </ul>
                                  </div>
                                </div>                               
                              </div>
                            </div>
                          </div> 
                        </div>  
                  </div>
                   
                `;
      });
      $('#card').append(result);

    }
  })
})
