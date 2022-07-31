import 'dart:convert';

class Mascota {
    Mascota({
        this.idMascota,
        required this.nombre,
        required this.raza,
        required this.fechaNacimientoAt,
        required this.isDiscapacidad,
        required this.peso,
    });

    int? idMascota;
    String nombre;
    String raza;
    DateTime fechaNacimientoAt;
    bool isDiscapacidad;
    double peso;

    factory Mascota.fromJson(String str) => Mascota.fromMap(json.decode(str));

    String toJson() => json.encode(toMap());

    factory Mascota.fromMap(Map<String, dynamic> json) => Mascota(
        idMascota: json["id_mascota"],
        nombre: json["nombre"],
        raza: json["raza"],
        fechaNacimientoAt: DateTime.parse(json["fecha_nacimiento"]),
        isDiscapacidad: json["isDiscapacidad"],
        peso: json["peso"].toDouble(),
    );

    Map<String, dynamic> toMap() => {
        "id_mascota": idMascota,
        "nombre": nombre,
        "raza": raza,
        "fecha_nacimiento": "${fechaNacimientoAt.year.toString().padLeft(4, '0')}-${fechaNacimientoAt.month.toString().padLeft(2, '0')}-${fechaNacimientoAt.day.toString().padLeft(2, '0')}",
        "discapacidad": isDiscapacidad,
        "peso": peso,
    };
}