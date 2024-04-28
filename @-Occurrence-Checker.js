function func3(ch){
            var a= ch.split('')
            var x= 0
            for(let i=0;i<a.length;i++){
                if(a[i]=="@"){
                    x=x+1
                }
            }
            if (x==1){
                document.write(true);
            }
            else{
                document.write(false);
            }
        }
        ch="mariem@"
        func3(ch)
