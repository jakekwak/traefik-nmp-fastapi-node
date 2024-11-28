FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11

COPY ./app/requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY ./app /app

EXPOSE 8093
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8093"]