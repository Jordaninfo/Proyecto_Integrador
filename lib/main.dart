import 'package:flutter/material.dart';
import 'package:grupo_1_a/providers/users_provider.dart';
import 'package:grupo_1_a/routes/routes.dart';
import 'package:grupo_1_a/themes/theme.dart';
import 'package:provider/provider.dart';

void main(){ 
  runApp( const AppState());
}
class AppState extends StatelessWidget {
  const AppState({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiProvider(providers: [
      ChangeNotifierProvider(create: (_)=> UsersProvider(),
          ),
      
    ],
    child: const MyApp(),);
  }
}


class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Titulo cualquiera',
      initialRoute: AppRoutes.initialRoute,
      routes: AppRoutes.getAppRoutes(),
      theme: AppTheme.lightTheme,
    );
  }
}
