$(document).ready(function() {

    let len=$('#queue').width() -70
    let dum=70

    let $parent = $('#queue');
         var insertCode1='void enqueue(int element) {'
         var insertCode2 = '\n  if (rear == MAX_SIZE - 1) {\n  printf("Error: Queue is full!");\n }'
         var insertCode3='  else {\nif (front == -1) {\n front = 0;\n}\n rear++;\nqueue[rear] = element;\nprintf("Element  has been enqueued to the queue.");\n}'
         var insertCode4=' }'
         var codeArray = [insertCode1, insertCode2, insertCode3, insertCode4];
         var count = 0;


//pop data
         var popCode1='void dequeue() {'
         var popCode2='if (front == -1) {\nprintf("Error: Queue is empty!");\n } '
         var popCode3='else {\nprintf("Element  has been dequeued from the queue");\nif (front == rear) {\nfront = rear = -1;\n} else {\nfront++;\n}\n}'
         var popCode4=' }'
         var codeArray2 = [popCode1, popCode2, popCode3, popCode4];
         var count2 = 0;

//top data
         var topCode1='void getFront() {'
         var topCode2=' if (front == -1) {\nprintf("Error: Queue is empty!");\nreturn -1;\n}'
         var topCode3=' else {\nreturn queue[front];\n}'
         var topCode4=' }'
         var codeArray3 = [topCode1, topCode2, topCode3, topCode4];
         var count3 = 0;


//        strating data


         function display_code() {


         var MAX = '\n \nMaximum Number of elements : 10'
         var top = 'Front Element : '+ $parent.children().last().text()
         var Current_length = 'Current Length of Queue : ' + (10- (10-($parent.children().length)))
         var remain = 'You can insert '+ ((10-($parent.children().length)))+' elements'
         var codeArray4 = [MAX, top, Current_length, remain];

         $.each(codeArray4, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');
             });


        }
        display_code();

             function indexing() {
              $('#queue').children().each(function(index, element) {
                    $(element).find('p').remove();
                    $(element).append('<p style="color: black; position:relative; top: -50px;left:-20px; width: 100%; text-align: center;">' + (index) + '</p>');
                });
            }

//    ENQUEUE BUTTON
    $("#enqueue-form").submit(function(event) {
        event.preventDefault();
               $('#code-display').empty();
               $.each(codeArray, function(index, value) {
                  $('#code-display').append('<pre>' + value + '</pre>');
             });

        var item = $("#item").val();

        let $child = $parent.children().first();

        $parent.children().first().css({
            backgroundColor:'green'
            });

        console.log($child.prevObject.length)


        if (item !="" && $child.prevObject.length !=10){

         $.ajax({
            url: '/hhh',
            method: 'GET',
            data: { message: item },
            success: function(response) {
                console.log("succes")
                var $hello = $('<div>').text(response.message);

                $hello.css({
                  backgroundColor: 'green',
                  color: 'white',
                  marginLeft: 'auto',
                  marginRight:'1px',
                  height:'40px',
                  width:'70px',
                  paddingLeft:'20px',
                });
                $hello.addClass("items");
                $('#queue').append($hello);

                $hello.animate({
                      marginLeft: '30px'

                    }, 100, function() {
                        console.log(len)
                    });

                 var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display pre:eq(2)').css('background-color', 'green');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 50);

                console.log("after")
                $('#front').text("enqueue element : "+response.message);
                item='';
                console.log(item)
                indexing();
                },
                error: function(xhr, status, error) {
                console.log('Error:', error);
                }
            });

            $("#item").val("");



 }
        else{

         var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display pre:eq(1)').css('background-color', '#ff3333');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 100);


        console.log("nottttt")}
    });


//    DEQUEE BUTTON
      let $button = $('#dequeue-button');

      $button.on('click', function() {
       $('#code-display').empty();
             $.each(codeArray2, function(index, value) {
                  $('#code-display').append('<pre>' + value + '</pre>');
             });


        let $child = $parent.children().first();
        if($child.length==0){
            $('#front').text("queue is empty");
                             var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display pre:eq(1)').css('background-color', '#ff3333');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 100);


        }
        else{
        $('#front').text("deque element : "+$child.text());
            var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display pre:eq(2)').css('background-color', '#ff3333');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 100);

        $child.animate({
    width: '0',
    margin:'0'
  }, 500, function() {
    $child.remove();
//    $parent.children().animate({
//      marginLeft: '-=20px'
//    }, 500,function(){
//    console.log("diasdf")
//    });
  });



        }
      });

//FRONT BUTTON
      let $button2 = $('#front-button');
      $button2.on('click', function() {

      $('#code-display').empty();
       $.each(codeArray3, function(index, value) {
                  $('#code-display').append('<pre>' + value + '</pre>');
             });

        let $child = $parent.children().first();
        console.log("front");
         let val= $child.text();
         if (val==''){

                 var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display pre:eq(1)').css('background-color', '#ff3333');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 100);
                $('#front').text("queue is empty");
                }
         else{
//                $('#front').text("Front element : "+val);
                $parent.children().first().css({
                backgroundColor:'blue'
                });
                 var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display pre:eq(2)').css('background-color', '#ff3333');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 100);


         }
      });

      indexing();
});






