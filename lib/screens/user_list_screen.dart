import 'package:flutter/material.dart';

class UserListScreen extends StatelessWidget {
  const UserListScreen ({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:  const Text("User List"),
      ),
      body: const Text("User List"),
    );
  }
}