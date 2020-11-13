
String String_replace_from_(const String* s, int n, String* s2) {
  int first_len = strlen(*s);
  int first_sub_len;

  if (n < 0) {
    first_sub_len = first_len + n;
  } else {
    first_sub_len = n;
  }

  if (first_sub_len < 1 || first_sub_len >= first_len) {
    return String_copy(s2);
  }

  int len = first_sub_len + strlen(*s2) + 1;
  String res = (String)CARP_MALLOC(len);
  memset(res, '\0', len);

  strncpy(res, *s, first_sub_len);
  strcat(res, *s2);

  return res;
}

String String_trim_from_(const String* s, int n) {
  String r = String_empty();
  String res = String_replace_from_(s, n, &r);
  CARP_FREE(r);
  return res;
}

String String_to_lower_(const String* p) {
  String r = String_copy(p);
  int i = strlen(r);
  while (i--) *(r + i) = tolower(*(r + i));
  return r;
}
