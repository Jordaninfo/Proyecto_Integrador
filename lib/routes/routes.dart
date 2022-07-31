import 'package:flutter/material.dart';
import 'package:grupo_1_a/models/models.dart';
import 'package:grupo_1_a/screens/screens.dart';

class AppRoutes{
  static const initialRoute = "home";

  static final menuOptions = <MenuOption>[
    MenuOption(
      route:"home",
      icon: Icons.home, 
      name: "Home Screen", 
      screen : const HomeScreen()),
    MenuOption(
      route:"user.list",
      icon: Icons.list, 
      name: "User list", 
      screen : const UserListScreen()),
   
    
  ];

  static Map<String,Widget Function(BuildContext)> getAppRoutes(){
    Map<String,Widget Function(BuildContext)> routes = {};
    for(final menuOption in menuOptions){
      routes.addAll({menuOption.route: (BuildContext context)=>menuOption.screen});
    }
    return routes;
  }
}