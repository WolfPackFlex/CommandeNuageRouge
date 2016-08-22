/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	deviceReadyDeferred : $.Deferred(),
	jqmReadyDeferred : $.Deferred(),
	// Application Constructor
	initialize : function() {
		this.bindEvents();
		$.when(this.deviceReadyDeferred, this.jqmReadyDeferred).then(
				this.frameworksInitialized);
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		$(document).on("mobileinit", function() {
			app.jqmReadyDeferred.resolve();
		});
	},
	// deviceready Event Handler
	onDeviceReady : function() {
		app.deviceReadyDeferred.resolve();
	},
	// jQM and PhoneGap initialized
	// place app initialization code here
	frameworksInitialized : function() {
		console.log('Frameworks initialized');
	}
};

app.initialize();

function openIG(){
	var ref = window.open('https://www.instagram.com/nuagerouge.ca/', '_blank', 'location=yes');
	ref.addEventListener('loadstart', function(event) {alert(event.url); });
}

function openFB(){
	var ref = window.open('https://www.facebook.com/nuagerouge.ca/', '_blank', 'location=yes');
	ref.addEventListener('loadstart', function(event) {alert(event.url); });
}

function openSite(){
	var ref = window.open('http://nuagerouge.ca', '_blank', 'location=yes');
	ref.addEventListener('loadstart', function(event) {alert(event.url); });
}

function chipsImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "nachos.jpg"
}

function olivesImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "piments bomba.jpg"
}
    
function cheeseImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "villeray.jpg"
}

function charImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "grelots chorizos pizzy.jpg"
}
 
function potImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "rillette 1.jpg"
}

function siropImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "sirop.jpg"
}

function burgerImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "burger.jpg"
}

function poissonImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "truitecrop.jpg"
}

function noixImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "IMG-20160822-WA0001.jpg"
}

function autresImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "olives.jpg"
}

function trempetteImage(){
	var image = document.getElementById('reactiveimg');
	image.src = "hummuscrop.jpg"
}