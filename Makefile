# Makefile


APP = app.py
EXECBIN = flask run

export FLASH_APP=${APP}
all :
	${EXECBIN}

test : export FLASH_DEBUG=1
test : 
	${EXECBIN}
	

