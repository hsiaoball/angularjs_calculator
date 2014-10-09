
var app = angular.module("app", []);
app.controller('ctrl_index', ['$scope',  // Controller for index page
  function ($scope) {
      $scope.screen='0';
      $scope.temp=0;
      var op_list=['+','-','*','/'];
      var op;
      var screen_num=0;
      var len=0;
      //var temp_op;
      var done=0;
      $scope.dot=0;
      $scope.do_dot=function(){
          if(done==1){
            $scope.clear();
          }
          if($scope.dot==0){
            $scope.dot=1;
            $scope.screen+='.';
          }
      }
      $scope.num=function(n){
        len+=1;
        if(done==1 || $scope.screen=='0'){
            $scope.screen=n.toString();
            //console.log($scope.screen);
            done=0;
        }else{
            $scope.screen=$scope.screen.concat(n.toString());
        }
      }
      
      $scope.clear=function(){
        $scope.screen='0';
        $scope.temp=0;  
        op=0; 
        $scope.dot=0;  
        done=0;
        len=0;
        $scope.op_display='';
      }
      $scope.back=function(){
            $scope.screen=$scope.screen.substring(0, $scope.screen.length-1);
            if($scope.dot>0)
                $scope.dot-=1;

      }    
      $scope.operation=function(n){
          if($scope.screen=='0' && n==2)
            $scope.screen='-';
          else{
            screen_num=Number($scope.screen);
            $scope.op_display=op_list[n-1];
            if($scope.temp==0){
              op=n;  
                  
              $scope.temp=screen_num;
              $scope.screen='';    
            }
            else{
              $scope.equal();
              op=n;  
              $scope.temp=Number($scope.screen);    
            }
          }
        
        
      }
      $scope.equal=function(){
          $scope.op_display='';
          screen_num=Number($scope.screen);
          //console.log($scope.temp);
          //console.log(op);
          //console.log(screen_num);
            switch(op) {
                case 1:
                    $scope.temp+=screen_num;
                    break;
                case 2:
                    $scope.temp-=screen_num;
                    break;                    
                case 3:
                    $scope.temp*=screen_num;
                    break;                    
                case 4:
                    $scope.temp/=screen_num;
                    break;                    

                    
                default:
                    return;                    
            }
          $scope.screen=$scope.temp.toString();
          $scope.temp=0;
          $scope.dot=0;
          done=1;
      }
      
  }]);

