
    const char *string1 = "Hello";
    const char *string2 = "Gun Gun Febrianza";
    int size = strlen(string1) + strlen(string2);
    char *buffer = (char *) malloc(size + 1);
    strcpy(buffer, s1);
    strcat(buffer, s2);
    free(buffer);
