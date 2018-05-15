<template>
  <div class="content">
    <form @submit.prevent="submitForm">
      <mt-header title="" class="wordTitle">
        <router-link to="/addresslist" slot="left">
          <mt-button><img src="../assets/img/return.png">新建地址</mt-button>
        </router-link>
        <button class="rightButton" slot="right">保存</button>
      </mt-header>
      <ul class="addressCont color_333 font_15">
        <li class="border_bottom">
          <span>姓名：</span><input v-model="name" />
          <input v-model="address_id" type="hidden" />
        </li>
        <li class="border_bottom">
          <span>手机号：</span><input v-model="phone" />
        </li>
        <li class="border_bottom city">
          <span v-show="cityshow">{{arr[0]}}-{{arr[1]}}-{{arr[2]}}</span>
          <!-- <input type="text" id='city-picker' placeholder="请选择 " /> -->
          <span class="cityCont" @click="popupVisible=true">请选择</span>
          <img src="../assets/img/go@3x.png">
        </li>
        <li class="border_bottom moreAddress">
          <span>详细地址：</span>
          <textarea placeholder="街道，楼牌号等" v-model="address"></textarea>
        </li>
      </ul>
      <div class="item-inner default border_bottom">
        <div class="item-title label color_333 font_15">设为默认地址</div>
        <div class="item-input">
          <mt-switch v-model="is_default"></mt-switch>
        </div>
      </div>
    </form>
