'use strict'
export default class Pendulum {
	constructor(canvas, ctx) {
		this.ctx = ctx;
		this.canvas = canvas;
		this.data = {
			animationID: null,
			animationStart: null,
			animationTimes: null,
			currentTime: 0,
			realCurrentTime: 0,
			solidX: 150,
			solidY: 80,
			offsetY: 2,
			offsetX: 0,
			counter: 0,
			rotateSpeed: 6,
			reversed: false,
			end: false,
			dx: 1
		};
	}

	init(startButton, resetButton) {
		this.startButton = startButton;
		this.resetButton = resetButton;
		this.canvas.width = 250;
		this.canvas.height = 400;
		this.ctx.lineWidth = 2;

		this.startButton.disabled = true;
  	this.resetButton.disabled = true;

  	let self = this;
  	this.startButton.onclick = function() {
	    if (self.data.counter === 0) {
	      self.data.animationStart = Date.now();
	      self.animation();
	      self.startButton.disabled = true;
	      self.resetButton.disabled = true;
	    }
	  };

	  this.resetButton.onclick = function() {
	    cancelAnimationFrame(self.data.animationID);
	    self.clear();
	    self.data.animationStart = undefined;
	    self.data.counter = 0;
	    self.drawPendulum();
	    self.drawSolid(0, 0);
	    self.initNextTime();

	    self.data.end = false;
	    self.data.dx = Math.abs(self.data.dx);
	    self.data.reversed = false;

	    self.startButton.disabled = false;
	    self.resetButton.disabled = true;
  	};

  	this.drawPendulum();
  	this.drawSolid(0, 0);
	}

	clear() {
		this.ctx.save();
	  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
	  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	  this.ctx.restore();
	}

	animation() {
		if (this.data.animationTimes != null && this.data.animationTimes !== undefined) {
	    this.clear();
	    if (this.drawSolid(this.data.counter * this.data.offsetX, this.data.counter * this.data.offsetY)) {
	      this.data.counter += this.data.dx;
	      this.data.animationID = requestAnimationFrame(this.animation.bind(this));
	    } else if (this.data.currentTime * 1000 < 1) {
	      this.data.dx = Math.abs(this.data.dx);
	      this.data.reversed = false;
		    cancelAnimationFrame(this.data.animationID);
		    let self = this;
		    setTimeout(function() {
		    	self.data.end = false;
		    }, 300)
	    } else {
	    	if (this.data.reversed) {
					this.data.currentTime = this.data.realCurrentTime - (this.data.realCurrentTime - this.data.currentTime);
					this.data.reversed = false;
		    } else {
			    this.data.currentTime /= 3;
			    this.data.reversed = true;
			    this.data.end = true;
		    }

		    this.data.dx *= -1;
		    this.data.animationStart = Date.now();
		    this.data.animationID = requestAnimationFrame(this.animation.bind(this));
	    }
	    this.drawPendulum();
	  } else {
	    throw "Animation times don't initialized";
	  }
	}

	drawPendulum() {
		this.ctx.strokeRect(10, 380, 200, 10);// lower beam
		this.ctx.strokeRect(15, 390, 10, 10);// left leg
		this.ctx.strokeRect(195, 390, 10, 10);// right leg

		this.ctx.strokeRect(35, 390, 30, 5);// top rack
		this.ctx.strokeRect(35, 375, 30, 5);// bot rack
		this.ctx.strokeRect(40, 40, 20, 335);// rack

		this.ctx.strokeRect(30, 35, 165, 5);// topper beam

		this.ctx.strokeRect(145, 40, 10, 5);// bot holder
		this.ctx.strokeRect(145, 30, 10, 5);// top holder

		this.ctx.strokeRect(125, 40, 12, 5);// left magnet
		this.ctx.strokeRect(163, 40, 12, 5);// right magnet

		this.ctx.beginPath();
		//left magnit
		this.ctx.moveTo(127, 45);
		this.ctx.lineTo(127, 55);
		this.ctx.lineTo(135, 50);
		this.ctx.lineTo(135, 45);

		//right magnit
		this.ctx.moveTo(173, 45);
		this.ctx.lineTo(173, 55);
		this.ctx.lineTo(165, 50);
		this.ctx.lineTo(165, 45);
		this.ctx.stroke();
		this.ctx.closePath();

		this.ctx.strokeRect(80, 330, 100, 50);
		this.ctx.strokeRect(90, 340, 80, 30);

		this.ctx.beginPath();

		for (let i = 0; i < 241; i += 3) {
			if ((i / 3) % 5 === 0) {
				this.ctx.moveTo(60, 70 + i);
				this.ctx.lineTo(50, 70 + i);
			} else {
				this.ctx.moveTo(60, 70 + i);
				this.ctx.lineTo(55, 70 + i);
			}
		}

		this.ctx.stroke();
		this.ctx.closePath();

		this.ctx.font = "bold 14pt Arial";

		if (!this.data.end) {
			if (Date.now() - this.data.animationStart) {
				if (Date.now() - this.data.animationStart < this.data.currentTime * 1000) {
					this.ctx.fillText((Date.now() - this.data.animationStart) / 1000 + "s", 100, 362);
				} else {
					this.ctx.fillText(this.data.currentTime + "s", 100, 362);
				}
			} else {
				this.ctx.fillText("0s", 100, 362);
			}
		} else {
			this.ctx.fillText(this.data.realCurrentTime + "s", 100, 362);
		}
	}

	drawSolid(offsetX, offsetY) {
		this.ctx.beginPath();
	  this.ctx.translate(this.data.solidX + offsetX, this.data.solidY + offsetY);
	  this.ctx.rotate(this.data.counter * this.data.rotateSpeed * Math.PI / 180);
	  this.ctx.arc(0, 0, 30, 0, 360, false);
	  this.ctx.arc(0, 0, 5, 0, 360, false);
	  this.ctx.rotate(-this.data.counter * this.data.rotateSpeed * Math.PI / 180);
	  this.ctx.translate(-this.data.solidX - offsetX, -this.data.solidY - offsetY);
	  this.ctx.moveTo(this.data.solidX + offsetX, this.data.solidY + offsetY - 5);
	  this.ctx.lineTo(this.data.solidX, 45);
	  this.ctx.stroke();
	  this.ctx.closePath();
	  // console.log(Date.now() - animationStart + " : " + currentTime * 1000);
	  if (Date.now() - this.data.animationStart > this.data.currentTime * 1000) {
	    if (this.data.animationTimes.indexOf(this.data.realCurrentTime) < this.data.animationTimes.length - 1) {
	      this.resetButton.disabled = false;
	    } else if (!this.data.completed) {
		    this.data.completed = true;
		    console.log(this.data.completed);
	    }
	    return false;
	  }
	  return true;
	}

	initNextTime() {
		if (this.data.animationTimes.indexOf(this.data.realCurrentTime) < this.data.animationTimes.length - 1) {
	    this.data.currentTime = this.data.animationTimes[this.data.animationTimes.indexOf(this.data.realCurrentTime) + 1];
		  this.data.realCurrentTime = this.data.animationTimes[this.data.animationTimes.indexOf(this.data.realCurrentTime) + 1];
	    this.data.offsetY = 200 / (this.data.currentTime * 60);
	  }
	}

	initAnimationTimes(times) {
		this.data.animationTimes = [];
	  for (let i = 0; i < times.length; i++) {
	    this.data.animationTimes.push(times[i]);
	  }
	  console.log(this.data.animationTimes);
	  this.data.currentTime = this.data.animationTimes[0];
	  this.data.realCurrentTime = this.data.currentTime;
	  this.data.offsetY = 200 / (this.data.currentTime * 60);
	}
}