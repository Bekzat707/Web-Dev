#cigar_party
def cigar_party(cigars, is_weekend):
    return cigars >= 40 if is_weekend else 40 <= cigars <= 60

#caught_speeding
def caught_speeding(speed, is_birthday):
    limit = 5 if is_birthday else 0
    if speed <= 60 + limit:
        return 0
    elif speed <= 80 + limit:
        return 1
    else:
        return 2

