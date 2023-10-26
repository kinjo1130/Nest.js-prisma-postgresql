# コンテナを起動する
up:
	docker compose up -d --build
# コンテナを停止して、停止したコンテナを削除する
down:
	docker compose down
# コンテナが起動している稼働かを確認する
ps:
	docker compose ps
# 一度作成しているコンテナを再起動する
start:
	docker compose start
# コンテナを停止する
stop:
	docker compose stop

# DBのスキーマを変更したら、実行する
migrate:
	npx prisma migrate dev --name init

# コンテナ内のDBに入るコマンド
loginDB:
	docker exec -it db-container psql -U user -d mydb

# コンテナ内のNest.jsのログをみるコマンド
log:
	docker logs -f nestjs_api


