OBJS = main.o buildmap.o generator.o wordlist.o
CC = g++
DEBUG = -g
CFLAGS = -std=c++11 -c $(DEBUG)
LFLAGS = -std=c++11 $(DEBUG)

markov : $(OBJS)
	$(CC) $(LFLAGS) $(OBJS) -o markov

main.o : tool.h main.cpp buildmap.h generator.h wordlist.h
	$(CC) $(CFLAGS) main.cpp

buildmap.o : buildmap.h buildmap.cpp tool.h
	$(CC) $(CFLAGS) buildmap.cpp

generator.o : generator.h generator.cpp tool.h 
	$(CC) $(CFLAGS) generator.cpp

wordlist.o : wordlist.h wordlist.cpp tool.h
	$(CC) $(CFLAGS) wordlist.cpp

clean:
	rm *.o
