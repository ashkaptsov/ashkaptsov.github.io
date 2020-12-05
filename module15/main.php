<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="flex-container">
    <div class="header">
        <div class="logo"><?php include 'logo.php';?></div>
        <div class="nav"><?php include 'menu.php';?></div>
    </div>

    <div class="about_me">
       <h2> <?php echo $p ?> </h2>
       <div class="data">
           <div class="picture">
               <img src="picture.jpg" alt="picture" width="60%">
           </div>
           <div class="info">
            <p> Меня зовут
            <?php echo $name ?> <?php echo $surname?>, <br>
            Я из города <?php echo $city?>, <br>
            Мне <?php echo $age?> лет. <br>
            <br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique expedita sint dignissimos fuga dicta, atque sed perspiciatis eveniet ea consectetur, saepe autem facilis, sequi ab corrupti eligendi a rerum id?  
            </p>
           </div>
       </div>
    
       
        <div class="knowledge">
            <?php include 'knowledge.php'?>
            <?php echo $a, ' ', $b, ' ', $c; ?>
            <br>
            <?php
            $a = 10;
            $b = 20;
            $c = $a + $b;
            echo $c;
            ?>
            <br>
            <?php
            echo $d;
            ?> 
        </div>

        <div class="article">
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Recusandae asperiores ducimus dolore explicabo. Animi est amet quibusdam molestias! 
                    Minus laudantium sapiente dignissimos possimus natus cumque delectus sed, accusantium totam quia?
                </p>
        </div>
    </div>

    <?php include 'footer.php' ?>


    </div>
</body>
</html>