import 'package:flutter/material.dart';
import 'package:grupo_1_a/themes/theme.dart';

class CustomInputField extends StatelessWidget {
  final bool? autofocus;
  final TextInputType? keyboardType;
  final bool? obscureText;
  final IconData? icon;
  final IconData? suffixIcon;
  final String? hintText;
  final String? labelText;
  final String? helperText;
  final Map<String, String> formValues;
  final String formProperty;

  const CustomInputField({
    Key? key,
  this.autofocus,
  this.keyboardType, 
  this.obscureText,
  this.icon,
  this.suffixIcon,
  this.hintText,
  this.labelText, 
  this.helperText, 
  required this.formValues, 
  required this.formProperty,
  
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      autofocus: autofocus ?? false,
      keyboardType: keyboardType,
      obscureText: obscureText ?? false,
      textCapitalization: TextCapitalization.words,
      onChanged: (value) => formValues[formProperty]=value,
      validator: (value) {
        if (value == null) return 'Obligatorio';
        if (value.length < 3) return 'No se puede tener menos de dos caracteres';
      },
      autovalidateMode: AutovalidateMode.onUserInteraction,
      decoration: InputDecoration(
        hintText: hintText,
        labelText: labelText,
        helperText: helperText,
        suffixIcon: Icon(
          suffixIcon,
          color: AppTheme.primary
        ),
        //prefixIcon: Icon(Icons.supervised_user_circ
      ),
    );
  }
}
