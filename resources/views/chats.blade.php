<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nour Chat Application</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="/css/app.css">

     
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css'>

    <style>
        .chat-messages{
            height: 400px;
            overflow: auto;
            padding: 5px;
        }

        .chat-messages li{
            /* margin: 14px; */
            padding-top: 15px;
        }

        .message-item{
            margin: 25px 5px;
        }
        .ul small{
            padding-bottom: 15px;
        }

        ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        }

        ::-webkit-scrollbar {
        width: 12px;
        background-color: #F5F5F5;
        }

        ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
        }

    </style>

</head>
<body>
    
    <div class="chat" id="app">
        <div class="chat-title">
        <h1>{{ Auth::user()->name }}</h1>
         <br>
          <h2>Users Online: <strong> @{{ numberOfUsers }} </strong></h2>
          <figure class="avatar">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>
        </div>
        <div class="messages">
          <div class="messages-content">
                
                <ul class="chat-messages" v-chat-scroll>
                  <message v-for='value, index in chat.message' 
                           color='success'
                           :key=value.index 
                           :user=chat.user[index] 
                           :color=chat.color[index]
                           :time=chat.time[index]
                           > 
                           @{{ value }}</message>

                           <small class="badge float-right badge-primary">@{{ typing }}</small>
              </ul>
          </div>
        </div>
        <div class="message-box">
            <input type="text" class="message-input" name="" id="" placeholder="Type message..." v-model='message' @keyup.enter='send'>
          {{-- <textarea type="text" class="message-input" placeholder="Type message..." v-model='message' @keyup.enter='send' rows="1"></textarea> --}}
          <button type="submit" class="message-submit" @click='send'>Send</button>
        </div>
      
      </div>
      <div class="bg"></div>
      
      

      
    {{-- <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
     --}}
    <script src="/js/app.js"></script>


</body>
</html>