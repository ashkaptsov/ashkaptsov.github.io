<?php

abstract class Auto {
    private $wheels = 4;
    abstract public function goForward();
    abstract public function goBack();
    abstract public function turn();
    abstract public function stop();
}

interface CarFunc {
    public function nitrogen();
}

interface BulldozerFunc {
    public function moveBucket();
}

interface TankFunc {
    public function shoot();
}


class Car extends Auto implements CarFunc {
    public $color;
    public $maxSpeed;
    public function nitrogen(){
        return 'nitroooo!!';
    }
    
    public function goForward(){
        return 'Forward';
    }
    public function goBack(){
        return 'back';
    }
    public function turn(){
        return 'turn';
    }
    public function stop(){
        return 'stop';
    }
}

class Bulldozer extends Auto implements BulldozerFunc {
    public $color;
    public $maxSpeed;
    public function moveBucket(){
        return 'moveBucket';
    }
    public function goForward(){
        return 'Forward';
    }
    public function goBack(){
        return 'back';
    }
    public function turn(){
        return 'turn';
    }
    public function stop(){
        return 'stop';
    }
}

class Tank extends Auto implements TankFunc {
    public $color;
    public $maxSpeed;
    public function shoot(){
        return 'shoot';
    }
    public function goForward(){
        return 'Forward';
    }
    public function goBack(){
        return 'back';
    }
    public function turn(){
        return 'turn';
    }
    public function stop(){
        return 'stop';
    }
}



$car = new Car;
$car->color = 'red';
$car->maxSpeed = '200';
$car->goForward();
$car->nitrogen();

$bulldozer = new Bulldozer;
$bulldozer->color = 'blue';
$bulldozer->maxSpeed = '40';
$bulldozer->goForward();
$bulldozer->moveBucket();

echo $car->goForward()."\n"; 
echo $car->nitrogen();

