
String String_to_lower_(const String* p) {
  String r = String_copy(p);
  int i = strlen(r);
  while (i--) *(r + i) = tolower(*(r + i));
  return r;
}
