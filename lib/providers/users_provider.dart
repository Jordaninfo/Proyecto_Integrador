
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:core';
import 'package:grupo_1_a/models/models.dart';

String _baseUrl = "localhost:3000";
class UsersProvider extends ChangeNotifier{
  UsersProvider(){
   getUser();
  }
  
  getUsers() async{
    var url = Uri.http(_baseUrl, "users");
    //var response = await http.get(url);
    var response = await http.get(url);
        print(response.body);

  }
  Future<User> getUser()async{ 
    var url = Uri.http(_baseUrl,"users/1");
    var response = await http.get(url);
    Map<String, dynamic> userMap= json.decode(response.body);
    user.lastname = userMap["lastname"];
    User user = User( lastname:userMap["lastname"],   name: userMap["name"], username: userMap["username"] );

    //userMap.forEach((key, value) {
     return user;
    }
        

  }
  /*createUsers()async{
    var url = Uri.http(_baseUrl, "users");
    var response = await http.post(url);
    print(response.body);
  }
  updateUsers()async{
    var url = Uri.http(_baseUrl, "users");
    var response = await http.put(url);
    print(response.body);
  }
  deleteUsers()async{
    var url = Uri.http(_baseUrl, "users{id}");
    var response = await http.delete(url);
    print(response.body);
  }*/
  //getUser(){}createUser(){ }updateUser(){}deleteUser(){ 
  