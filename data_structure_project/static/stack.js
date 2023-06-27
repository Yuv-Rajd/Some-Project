$(document).ready(function() {
//push data
         let $parent = $('#stack');



         var insertCode1='void push(int element) {'
         var insertCode2='if (top == MAX_SIZE - 1) {\n  printf("Error: Stack is full!");\n}'
         var insertCode3=' else {\n  top++;\n  stack[top] = element\n  printf("Element  has been pushed onto the stack.");}'
         var insertCode4=' }'
         var codeArray = [insertCode1, insertCode2, insertCode3, insertCode4];
         var count = 0;

//pop data
         var popCode1='void pop() {'
         var popCode2='if (top == -1) {\n  printf("Error: Stack is empty!");\n}'
         var popCode3=' else {\n  top--;\n  printf("Element has been popped from the stack.);\n}'
         var popCode4=' }'
         var codeArray2 = [popCode1, popCode2, popCode3, popCode4];
         var count2 = 0;
//top data
         var topCode1='void top() {'
         var topCode2='if (top == -1) {\n  printf("Error: Stack is empty!");\n}'
         var topCode3=' else {\n  top--;\n  printf("Top is Highlighted");\n}'
         var topCode4=' }'
         var codeArray3 = [topCode1, topCode2, topCode3, topCode4];
         var count3 = 0;


//        strating data


         function display_code() {


         var MAX = '\n \nMaximum Number of elements : 10'
         var top = 'Top Element : '+ $parent.children().last().text()[0]
         var Current_length = 'Current Length of Stack : ' + (10- (10-($parent.children().length)))
         var remain = 'You can push '+ ((10-($parent.children().length)))+' elements'
         var codeArray4 = [MAX, top, Current_length, remain];
         $.each(codeArray4, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');
             });


        }
        display_code();





//         $("#code-display").text(insertCode);
//PUSH BUTTON

        let $button = $('#push-button');

        let $child = $parent.children().first();


        $button.on('click', function() {


//        item
        var $top3 = $parent.children().last();
        $top3.css({
        backgroundColor:'green'
        });


        var item = $("#push-element").val();

        console.log($parent.children().length)

        if (item !="" && $parent.children().length !=10){

        $('#code-display').empty();
             $.each(codeArray, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');
             });

//             $('#code-display p:eq(2)').css('background-color', 'green');
            console.log($parent.children().last().find('p').eq(1));
            $parent.children().last().find('p').eq(1).remove();


           var $elem = $('<div>').text(item);

                $elem.css({
                  backgroundColor: 'green',
                  marginBottom:'auto',
                });
                $elem.addClass("items");
                $('#stack').append($elem);

                $elem.animate({
                      marginBottom: '5px'
                    }, 300,function(){
                        console.log("asdf");

                    });

                    var childPara = $('<p>'+($parent.children().length -1)+'</p>');
                      childPara.css('position', 'absolute');
                      childPara.css('left', '-50px');
                      childPara.css('color', 'black');
                      $elem.append(childPara);

                      var $top11 = $parent.children().last();
                var childPara2 = $('<p>TOP</p>');
                      childPara2.css('position', 'absolute');
                      childPara2.css('left', '-100px');
                      childPara2.css('color', 'black');
                      $top11.append(childPara2);

                var timer = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display p:eq(2)').css('background-color', '#00e600');
                } else {
                     $('#code-display p:eq(2)').css('background-color', 'white');
                     count=0;
                     $('#code-display').empty();
                        display_code();
                  clearInterval(timer);
                }

              }, 100,function(){

              });


        }else{
        if (item !=""){
        console.log(count)
        $.each(codeArray, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');
             });
        var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display p:eq(1)').css('background-color', '#ff3333');
                } else {

                var $top11 = $parent.children().last();
                var childPara2 = $('<p>Stack is FuLL</p>');
                      childPara2.css('position', 'absolute');
                      childPara2.css('right', '-100px');
                      childPara2.css('color', 'black');
                      $top11.append(childPara2);


                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                  clearInterval(timer2);
                }

              }, 100,function(){
              $('#code-display').empty();
              display_code();
              });

        }



        console.log("errorPush");
        }

        $("#push-element").prop('value', '');

        });
//_________________________________________________________________________________________________
//POP BUTTON
        let $button2 = $('#pop-button');

        $button2.on('click', function() {
        $('#code-display').empty();

        $parent.children().last().find('p').eq(1).remove();
        var $top = $parent.children().last();
        console.log($parent.children().length);
        if($parent.children().length == 0){
        console.log("poperrror")

        $.each(codeArray2, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');

             });

        var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display p:eq(1)').css('background-color', '#ff3333');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;

//                 var $top11 = $parent.children().last();
                var childPara31 = $('<p>Stack is Empty</p>');
                      childPara31.css('position', 'absolute');
                      childPara31.css('right', '-100px');
                      childPara31.css('color', 'red');
                      $parent.append(childPara31);

                     $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 100,function(){

              });


        }else{
        $top.css({
        backgroundColor:'red'
        });
        console.log($top.text());
        $.each(codeArray2, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');
             });

        $top.animate({
                      marginBottom:500-($parent.children().length*50)+'px'
                    }, 100, function() {
                        $top.remove();
                                var $top12 = $parent.children().last();
                                var childPara3 = $('<p>TOP</p>');
                                      childPara3.css('position', 'absolute');
                                      childPara3.css('left', '-100px');
                                      childPara3.css('color', 'black');
                                      $top12.append(childPara3);
                        console.log("success")
                    });


        var timer3 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display p:eq(2)').css('background-color', '#00e600');
                } else {
                     $('#code-display p:eq(2)').css('background-color', 'white');
                     count=0;
                     $('#code-display').empty();
                        display_code();
                  clearInterval(timer3);
                }

              }, 100,function(){

              });

        }

        });

//TOP BUTTON
        let $button3 = $('#top-button');

        $button3.on('click', function() {
        $('#code-display').empty();



        if($parent.children().length == 0){
        $.each(codeArray3, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');
             });

        var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display p:eq(1)').css('background-color', '#ff3333');
                } else {
                     $('#code-display p:eq(1)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                     display_code();
                  clearInterval(timer2);
                }

              }, 100,function(){


              });


        }else{
        $.each(codeArray3, function(index, value) {
                  $('#code-display').append('<p>' + value + '</p>');
             });

        var timer2 = setInterval(function() {
                if (count < 3) {
                  count++;
                     $('#code-display p:eq(2)').css('background-color', '#00e600');
                } else {
                     $('#code-display p:eq(2)').css('background-color', 'white');
                     count=0;
                      $('#code-display').empty();
                    display_code();
                  clearInterval(timer2);
                }

              }, 100,function(){

              });

        }

        var $top2 = $parent.children().last();

        $top2.css({
        backgroundColor:'blue'
        });
        });







      });







