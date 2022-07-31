
import 'package:flutter/material.dart';
import 'package:grupo_1_a/providers/users_provider.dart';
import 'package:grupo_1_a/themes/theme.dart';
import 'package:grupo_1_a/widgets/widgets.dart';
import 'package:provider/provider.dart';

class UserFormScreen extends StatelessWidget {
  const UserFormScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final usersProvider = Provider.of<UsersProvider>(context); 
    print(usersProvider.getUser());
    final GlobalKey<FormState> myFormKey = GlobalKey<FormState>();
    final Map<String,String> myFormValues = {
      "nombre":"",
      "fechaNacimiento":"",
      "discapacidad":"",
      "peso":"",
      "raza":""

    };

     return Scaffold(
      appBar: AppBar(
        title: const Text('User Form'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          child: Form(
            key:myFormKey,
            child: Column(
              children:  [
                CustomInputField(
                  formProperty: "nombre",
                  formValues: myFormValues,
                  labelText: 'Nombre de mascota:',
                  hintText: 'Escriba su mascota', 
                  helperText: 'Solo mayusculas',
                  suffixIcon: Icons.gif_box_rounded,
                  autofocus: true,
                ),
                CustomInputField(
                  formProperty: "fechaNacimiento",
                  formValues: myFormValues,
                  labelText: 'Nombre:',
                  hintText: 'Escriba su nombre', 
                  helperText: 'Solo mayusculas',
                  suffixIcon: Icons.people,
                  autofocus: true,
                  keyboardType: TextInputType.datetime,

                ),
                CustomInputField(
                  formProperty: "discapacidad",
                  formValues: myFormValues,
                  labelText: 'Apellido:',
                  hintText: 'Escriba su apellido', 
                  helperText: 'Solo letras',
                  suffixIcon: Icons.people,
                  keyboardType:  TextInputType.number
                ),
                CustomInputField(
                  formProperty: "peso",
                  formValues: myFormValues,
                  labelText: 'Correo:',
                  hintText: 'Escriba el peso', 
                  helperText: 'Digite en numeros el peso',
                  suffixIcon: Icons.people,
                  keyboardType: TextInputType.number,
                ),
                DropdownButtonFormField <String>(
                  items:const [
                    DropdownMenuItem(
                      value:"Grandanes", 
                      child: Text("Gran Danes")
                      ),
                    DropdownMenuItem(
                      value:"Cihuhua", 
                      child: Text("Chihuahua")
                      ),
                    DropdownMenuItem(
                      value:"Pitbull", 
                      child: Text("Pitbull")
                      ),
                  ], 
                  onChanged: (value){
                myFormValues["roles"] = value ?? "";    
                  } ),
                ElevatedButton.icon(
                  onPressed: (){
                    print(myFormKey);
                  }, 
                  icon: const Icon(Icons.save), 
                  label: const Text("GUARDAR"),
                )         
              ],
            ),
          ),
        ),
      )
    );
  }
}

